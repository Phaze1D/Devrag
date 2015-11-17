class LpusController < ApplicationController


  def lpu_validation

    lpu_string = params[:lpu_string]

    respond_to do |format|

      if !lpu_string.nil? && lpu_string.length < 100
        format.json { render json: {:success => 'true'}.to_json }
      else
        format.json { render json: {:failed => 'to long'}.to_json, status: :unprocessable_entity }
      end

    end

  end

end
