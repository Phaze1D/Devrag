class LikesController < ApplicationController

  # Add before filters

  def create
    @tool = Tool.find(params[:tool_id])
    like = Like.new(tool_id: @tool.id, user_id: current_user.id)

    respond_to do |format|
      if like.save
        format.js
      else
        format.json { render json: like.errors, status: :unprocessable_entity }
      end
    end

  end

  def destroy

    like = Like.find(params[:id])
    like.destroy

    @like = Like.new
    @tool = Tool.find(params[:tool_id])
    respond_to do |format|
      format.js
    end

  end


end
