# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Users
#   username, email, password, picture, activation_token, reset_token, activated, reset_sent_at
# Tools
#   name, website, description, user_id, (likes_amount, follows_amounts, comments_amounts)
# Reports
#   description, for_tool_id, by_user_id
# Relationships (Followers, Follows)
#   id, user_id, tool_id
# Comments
#   comment, made_by_user_id, on_tool_id, reply_to_user_id
# Languages
#   name
# Platforms
#   name
# Uses
#   name
# Languages_Tools
#     language_id, tool_id
# Platforms_Tools
#     platform_id, tool_id
# Uses_Tools
#     uses_id, tool_id

# Like_Notifications
#   info, seen, made_by_user_id, for_tool_id

# Follows_Notifications
#   info, seen, made_by_user_id, for_tool_id

# Comments_Notifications
#   info, seen, made_by_user_id, for_tool_id, comment_id

# Tool_Notifications
#   info, seen, made_by_tool_id, for_followers_id