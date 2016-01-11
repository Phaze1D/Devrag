module FollowersHelper


  def display_followers(followers)
    html = ''
    followers.each do |follower|
      html+= render(partial: 'followers/follower_section', locals: {follower: follower})
    end
    html
  end


end
