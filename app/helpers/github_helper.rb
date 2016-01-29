module GithubHelper

  def display_repos(repos)
    render partial: 'github/repos', locals: {repos: repos}
  end

end
