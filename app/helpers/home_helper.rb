module HomeHelper

  # Display the list of search results
  def display_results(results)
  	html = ''
  	results.each do |result|
  		html += render partial: 'home/tool_result', locals: {tool: result}
  	end
  	html
  end

  def show_devrag_header?
  	(controller_name == 'users' && action_name == 'show') ||
  	(controller_name == 'tools' && action_name == 'show')
  end

end
