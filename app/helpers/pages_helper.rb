module PagesHelper

  def show_devrag_header?
    (controller_name == 'users' && action_name == 'show') ||
        (controller_name == 'tools' && action_name == 'show') ||
        (controller_name == 'tools' && action_name == 'new')
  end


  def display_results(results)
    html = ''
    results.each do |result|
      html += '<div class="t-r">' + render(partial: 'pages/tool_result', locals: {tool: result} ) + '</div>'
    end
    html
  end

  def display_search?
    (controller_name != 'pages' && (action_name != 'home' || action_name != 'search') )
  end

end
