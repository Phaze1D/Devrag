class ReportsController < ApplicationController

  before_action :require_login

  def new

    @report = Report.find_by(tool_id: params[:tool_id], user_id: current_user.id)
    @tool = Tool.find_by(id: params[:tool_id])

    if @report.nil?
      @report = Report.new
    end

    respond_to do |format|
      format.js
    end

  end

  def create

    @report = Report.new(report_params)
    @report.user_id = current_user.id
    @report.tool_id = params[:tool_id]
    respond_to do |format|
      if @report.valid?

        format.js
        format.json { render json: {:success => 'true'}.to_json }
      else
        format.json { render json: @report.errors, status: :unprocessable_entity }
      end

    end

  end


  private

  def report_params
    params.require(:report).permit(:description)

  end

end
