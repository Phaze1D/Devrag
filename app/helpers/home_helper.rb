module HomeHelper

  def display_results
    html = ''
    @results.each do | result |
      html +=  render partial: 'home/tool_result', locals: {tool: result}
    end
      html
  end
end
