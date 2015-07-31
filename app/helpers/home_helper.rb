module HomeHelper

  # Display the list of search results
  def display_results
    html = ''
    @results.each do |result|
      html += render partial: 'home/tool_result', locals: {tool: result}
    end
    html
  end

  def resize_div
    if false
      'username-div'
    else
      ''
    end
  end
end
