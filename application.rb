require 'sinatra'

set :port, 9494

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end