class RelationshipsController < ApplicationController

  before_action :require_login, only: [:create, :destroy]

  before_action only: [:destroy] do
    correct_model('Relationship', params[:id])
  end

  def index

  end


  def create
    @relation = Relationship.new(user_id: current_user.id, tool_id: params[:tool_id])
    @tool = Tool.find(params[:tool_id])
    respond_to do |format|
      if @relation.save
        create_notification(@tool.user, @relation.id, 'Relationship') if @tool.user.follow_notification
        format.js
      else
        format.json { render json: @relation.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy

    relation = Relationship.find(params[:id])
    relation.destroy

    @relation = Relationship.new
    @tool = Tool.find(params[:tool_id])
    respond_to do |format|
        format.js
    end

  end

end
