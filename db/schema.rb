# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160113232228) do

  create_table "comments", force: :cascade do |t|
    t.text     "comment",    limit: 65535, null: false
    t.integer  "user_id",    limit: 4,     null: false
    t.integer  "tool_id",    limit: 4,     null: false
    t.integer  "comment_id", limit: 4
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "comments", ["comment_id"], name: "fk_rails_6545a5f2bc", using: :btree
  add_index "comments", ["tool_id"], name: "fk_rails_0b95e6cfe2", using: :btree
  add_index "comments", ["user_id"], name: "fk_rails_03de2dc08c", using: :btree

  create_table "languages", force: :cascade do |t|
    t.string   "name",       limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "languages", ["name"], name: "index_languages_on_name", unique: true, using: :btree

  create_table "languages_tools", id: false, force: :cascade do |t|
    t.integer "tool_id",     limit: 4, null: false
    t.integer "language_id", limit: 4, null: false
  end

  add_index "languages_tools", ["language_id"], name: "fk_rails_bc63bac6da", using: :btree
  add_index "languages_tools", ["tool_id", "language_id"], name: "index_languages_tools_on_tool_id_and_language_id", unique: true, using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    limit: 4, null: false
    t.integer  "tool_id",    limit: 4, null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  add_index "likes", ["tool_id", "user_id"], name: "index_likes_on_tool_id_and_user_id", unique: true, using: :btree
  add_index "likes", ["user_id"], name: "fk_rails_1e09b5dabf", using: :btree

  create_table "notifications", force: :cascade do |t|
    t.boolean  "seen",                         default: false, null: false
    t.integer  "user_id",          limit: 4,                   null: false
    t.integer  "from_action_id",   limit: 4
    t.string   "from_action_type", limit: 255
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
  end

  add_index "notifications", ["from_action_type", "from_action_id"], name: "index_notifications_on_from_action_type_and_from_action_id", using: :btree
  add_index "notifications", ["user_id"], name: "fk_rails_b080fb4855", using: :btree

  create_table "platforms", force: :cascade do |t|
    t.string   "name",       limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "platforms", ["name"], name: "index_platforms_on_name", unique: true, using: :btree

  create_table "platforms_tools", id: false, force: :cascade do |t|
    t.integer "tool_id",     limit: 4, null: false
    t.integer "platform_id", limit: 4, null: false
  end

  add_index "platforms_tools", ["platform_id"], name: "fk_rails_4d89a12ba4", using: :btree
  add_index "platforms_tools", ["tool_id", "platform_id"], name: "index_platforms_tools_on_tool_id_and_platform_id", unique: true, using: :btree

  create_table "relationships", force: :cascade do |t|
    t.integer  "user_id",    limit: 4, null: false
    t.integer  "tool_id",    limit: 4, null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  add_index "relationships", ["tool_id", "user_id"], name: "index_relationships_on_tool_id_and_user_id", unique: true, using: :btree
  add_index "relationships", ["user_id"], name: "fk_rails_a3d77c3b00", using: :btree

  create_table "reports", force: :cascade do |t|
    t.text     "description", limit: 65535, null: false
    t.integer  "tool_id",     limit: 4,     null: false
    t.integer  "user_id",     limit: 4,     null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "reports", ["tool_id"], name: "fk_rails_4ab124366a", using: :btree
  add_index "reports", ["user_id"], name: "fk_rails_c7699d537d", using: :btree

  create_table "tells", force: :cascade do |t|
    t.text     "description", limit: 65535, null: false
    t.integer  "tool_id",     limit: 4,     null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "tells", ["tool_id"], name: "fk_rails_4fa0b67318", using: :btree

  create_table "tools", force: :cascade do |t|
    t.string   "name",                limit: 255,                  null: false
    t.text     "website",             limit: 65535,                null: false
    t.text     "description",         limit: 65535,                null: false
    t.integer  "user_id",             limit: 4,                    null: false
    t.datetime "created_at",                                       null: false
    t.datetime "updated_at",                                       null: false
    t.integer  "likes_count",         limit: 4,     default: 0
    t.integer  "comments_count",      limit: 4,     default: 0
    t.integer  "relationships_count", limit: 4,     default: 0
    t.boolean  "active",                            default: true
  end

  add_index "tools", ["name"], name: "index_tools_on_name", unique: true, using: :btree
  add_index "tools", ["user_id"], name: "fk_rails_b12ff73ae7", using: :btree

  create_table "tools_uses", id: false, force: :cascade do |t|
    t.integer "tool_id", limit: 4, null: false
    t.integer "use_id",  limit: 4, null: false
  end

  add_index "tools_uses", ["tool_id", "use_id"], name: "index_tools_uses_on_tool_id_and_use_id", unique: true, using: :btree
  add_index "tools_uses", ["use_id"], name: "fk_rails_3b42ce8057", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",             limit: 255,                null: false
    t.string   "email",                limit: 255,                null: false
    t.string   "password_digest",      limit: 255,                null: false
    t.string   "reset_token",          limit: 255
    t.datetime "reset_sent_at"
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.boolean  "comment_notification",             default: true
    t.boolean  "like_notification",                default: true
    t.boolean  "follow_notification",              default: true
    t.boolean  "tell_notification",                default: true
    t.boolean  "email_notification",               default: true
    t.string   "avatar_file_name",     limit: 255
    t.string   "avatar_content_type",  limit: 255
    t.integer  "avatar_file_size",     limit: 4
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "uses", force: :cascade do |t|
    t.string   "name",       limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "uses", ["name"], name: "index_uses_on_name", unique: true, using: :btree

  add_foreign_key "comments", "comments"
  add_foreign_key "comments", "tools"
  add_foreign_key "comments", "users"
  add_foreign_key "languages_tools", "languages"
  add_foreign_key "languages_tools", "tools"
  add_foreign_key "likes", "tools"
  add_foreign_key "likes", "users"
  add_foreign_key "notifications", "users"
  add_foreign_key "platforms_tools", "platforms"
  add_foreign_key "platforms_tools", "tools"
  add_foreign_key "relationships", "tools"
  add_foreign_key "relationships", "users"
  add_foreign_key "reports", "tools"
  add_foreign_key "reports", "users"
  add_foreign_key "tells", "tools"
  add_foreign_key "tools", "users"
  add_foreign_key "tools_uses", "tools"
  add_foreign_key "tools_uses", "uses"
end
