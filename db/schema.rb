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

ActiveRecord::Schema.define(version: 20151022021255) do

  create_table "comment_notifications", force: :cascade do |t|
    t.string   "info",            limit: 255,                 null: false
    t.boolean  "seen",                        default: false, null: false
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.integer  "made_by_user_id", limit: 4,                   null: false
    t.integer  "for_tool_id",     limit: 4,                   null: false
  end

  add_index "comment_notifications", ["for_tool_id"], name: "fk_rails_becc44634e", using: :btree
  add_index "comment_notifications", ["made_by_user_id"], name: "fk_rails_c633415c8c", using: :btree

  create_table "comments", force: :cascade do |t|
    t.text     "comment",             limit: 65535, null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.integer  "on_tool_id",          limit: 4,     null: false
    t.integer  "by_user_id",          limit: 4,     null: false
    t.integer  "reply_to_comment_id", limit: 4
  end

  add_index "comments", ["by_user_id"], name: "fk_rails_2876691d0a", using: :btree
  add_index "comments", ["on_tool_id"], name: "fk_rails_51d7995a7e", using: :btree
  add_index "comments", ["reply_to_comment_id"], name: "fk_rails_526b106a01", using: :btree

  create_table "follow_notifications", force: :cascade do |t|
    t.string   "info",            limit: 255,                 null: false
    t.boolean  "seen",                        default: false, null: false
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.integer  "made_by_user_id", limit: 4,                   null: false
    t.integer  "for_tool_id",     limit: 4,                   null: false
  end

  add_index "follow_notifications", ["for_tool_id"], name: "fk_rails_54fde4b4a1", using: :btree
  add_index "follow_notifications", ["made_by_user_id"], name: "fk_rails_994c793811", using: :btree

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
  add_index "languages_tools", ["tool_id"], name: "fk_rails_65a5cd333a", using: :btree

  create_table "like_notifications", force: :cascade do |t|
    t.string   "info",            limit: 255,                 null: false
    t.boolean  "seen",                        default: false, null: false
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.integer  "made_by_user_id", limit: 4,                   null: false
    t.integer  "for_tool_id",     limit: 4,                   null: false
  end

  add_index "like_notifications", ["for_tool_id"], name: "fk_rails_2190bea43f", using: :btree
  add_index "like_notifications", ["made_by_user_id"], name: "fk_rails_02cf9244a0", using: :btree

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
  add_index "platforms_tools", ["tool_id"], name: "fk_rails_751c4f95ea", using: :btree

  create_table "relationships", force: :cascade do |t|
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.integer  "user_id",    limit: 4, null: false
    t.integer  "tool_id",    limit: 4, null: false
  end

  add_index "relationships", ["tool_id"], name: "fk_rails_f4f1beca08", using: :btree
  add_index "relationships", ["user_id"], name: "fk_rails_a3d77c3b00", using: :btree

  create_table "relationships_tool_notifications", id: false, force: :cascade do |t|
    t.integer "relationship_id",      limit: 4, null: false
    t.integer "tool_notification_id", limit: 4, null: false
  end

  add_index "relationships_tool_notifications", ["relationship_id"], name: "fk_rails_dadc095f13", using: :btree
  add_index "relationships_tool_notifications", ["tool_notification_id"], name: "fk_rails_f76eeb0a0b", using: :btree

  create_table "reports", force: :cascade do |t|
    t.text     "description", limit: 65535, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.integer  "for_tool_id", limit: 4,     null: false
    t.integer  "by_user_id",  limit: 4,     null: false
  end

  add_index "reports", ["by_user_id"], name: "fk_rails_acf56d7484", using: :btree
  add_index "reports", ["for_tool_id"], name: "fk_rails_a9d285a337", using: :btree

  create_table "tool_notifications", force: :cascade do |t|
    t.string   "info",            limit: 255,                 null: false
    t.boolean  "seen",                        default: false, null: false
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.integer  "made_by_tool_id", limit: 4,                   null: false
  end

  add_index "tool_notifications", ["made_by_tool_id"], name: "fk_rails_9b1dd65b7c", using: :btree

  create_table "tools", force: :cascade do |t|
    t.string   "name",        limit: 255,               null: false
    t.text     "description", limit: 65535,             null: false
    t.string   "website",     limit: 255,               null: false
    t.integer  "likes",       limit: 4,     default: 0, null: false
    t.integer  "comments",    limit: 4,     default: 0, null: false
    t.integer  "followers",   limit: 4,     default: 0, null: false
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.integer  "user_id",     limit: 4,                 null: false
  end

  add_index "tools", ["name"], name: "index_tools_on_name", unique: true, using: :btree
  add_index "tools", ["user_id"], name: "fk_rails_b12ff73ae7", using: :btree

  create_table "tools_uses", id: false, force: :cascade do |t|
    t.integer "tool_id", limit: 4, null: false
    t.integer "use_id",  limit: 4, null: false
  end

  add_index "tools_uses", ["tool_id"], name: "fk_rails_4d27e4cf69", using: :btree
  add_index "tools_uses", ["use_id"], name: "fk_rails_3b42ce8057", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",         limit: 255,                         null: false
    t.string   "email",            limit: 255,                         null: false
    t.string   "password_digest",  limit: 255,                         null: false
    t.string   "picture",          limit: 255, default: "default.jpg", null: false
    t.string   "activation_token", limit: 255
    t.boolean  "activated",                    default: false
    t.string   "reset_token",      limit: 255
    t.datetime "reset_sent_at"
    t.datetime "created_at",                                           null: false
    t.datetime "updated_at",                                           null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

  create_table "uses", force: :cascade do |t|
    t.string   "name",       limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "uses", ["name"], name: "index_uses_on_name", unique: true, using: :btree

  add_foreign_key "comment_notifications", "tools", column: "for_tool_id"
  add_foreign_key "comment_notifications", "users", column: "made_by_user_id"
  add_foreign_key "comments", "comments", column: "reply_to_comment_id"
  add_foreign_key "comments", "tools", column: "on_tool_id"
  add_foreign_key "comments", "users", column: "by_user_id"
  add_foreign_key "follow_notifications", "tools", column: "for_tool_id"
  add_foreign_key "follow_notifications", "users", column: "made_by_user_id"
  add_foreign_key "languages_tools", "languages"
  add_foreign_key "languages_tools", "tools"
  add_foreign_key "like_notifications", "tools", column: "for_tool_id"
  add_foreign_key "like_notifications", "users", column: "made_by_user_id"
  add_foreign_key "platforms_tools", "platforms"
  add_foreign_key "platforms_tools", "tools"
  add_foreign_key "relationships", "tools"
  add_foreign_key "relationships", "users"
  add_foreign_key "relationships_tool_notifications", "relationships"
  add_foreign_key "relationships_tool_notifications", "tool_notifications"
  add_foreign_key "reports", "tools", column: "for_tool_id"
  add_foreign_key "reports", "users", column: "by_user_id"
  add_foreign_key "tool_notifications", "tools", column: "made_by_tool_id"
  add_foreign_key "tools", "users"
  add_foreign_key "tools_uses", "tools"
  add_foreign_key "tools_uses", "uses"
end
