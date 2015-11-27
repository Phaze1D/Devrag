class RelationshipsController < ApplicationController


  # Make sure to add before filters when creating a relationship (user must be logged in)

  def index

  end

  # Need to add forms where the follow button is placed
  # Change the return html to just return an unfollow from
  def create
    @relation = Relationship.new(user_id: current_user.id, tool_id: params[:tool_id])
    @tool = Tool.find(params[:tool_id])
    respond_to do |format|
      if @relation.save
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
