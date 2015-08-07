module HomeHelper

  # Display the list of search results
  def display_results
    html = ''
    @results.each do |result|
      html += render partial: 'home/tool_result', locals: {tool: result}
    end
    html
  end

  # Calculates the css width of the username-div
  def resize_div
    if false
      'width: 140px;'
    elsif true
      'width: 110px;'
    else
      'width: 0px;'
    end
  end
end
