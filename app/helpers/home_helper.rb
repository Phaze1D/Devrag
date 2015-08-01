module HomeHelper

  # Display the list of search results
  def display_results
    html = ''
    @results.each do |result|
      html += render partial: 'home/tool_result', locals: {tool: result}
    end
    html
  end

  # Returns the css id when the users is logged in
  def resize_div
    if true
      'username-div'
    else
      ''
    end
  end
end
