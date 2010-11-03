require 'redmine'

require_dependency 'hooks/hooks'
Redmine::Plugin.register :redmine_watchers_by_group do
  name 'Watcher Sellection by Group'
  author 'Milan Stastny of ALVILA SYSTEMS'
  description 'Allows issue creator to select multiple watchers by group'
  version '0.0.1'
  author_url 'http://www.alvila.com'
end

