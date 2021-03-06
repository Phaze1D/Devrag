Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false


  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false
  config.action_controller.asset_host = 'http://localhost:3000'
  config.action_mailer.asset_host = 'http://localhost:3000'

  config.active_job.queue_adapter = :delayed_job

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = true

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true

  # Asset digests allow you to set far-future HTTP expiration dates on all assets,
  # yet still be able to expire them through the digest params.
  config.assets.digest = true

  # Adds additional error checking when serving assets at runtime.
  # Checks for improperly declared sprockets dependencies.
  # Raises helpful error messages.
  config.assets.raise_runtime_errors = false

  config.action_mailer.default_url_options = { :host => "localhost:3000" }

  # Raises error for missing translations
  # config.action_view.raise_on_missing_translations = true

  Paperclip.options[:command_path] = '/usr/local/bin/'

  config.paperclip_defaults = {
  :storage => :s3,
  :s3_host_name => 's3.amazonaws.com',
  :s3_credentials => {
    :bucket => 'devrag-avatars',
    :access_key_id => 'AKIAIEGU373NJLZKQ6CA',
    :secret_access_key => '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'
    },
  :s3_region => 'us-west-1',
  :s3_protocol => :https
  }

  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    :address        => 'email-smtp.us-west-2.amazonaws.com',
    :port           => 587,
    :authentication => :plain,
    :user_name      => 'AKIAITBCLKKSEJXVW3TQ',
    :password       => 'Ah2s4aGqVJB5+S5+xdXnfEKsGAk6V8Jf+3oRj0hTIAEp',
    :domain         => 'devrag.io',
    :enable_starttls_auto => true
  }

end
