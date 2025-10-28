# Contents
logging_demo.py - example Python application you can use to start testing for logging.
logging_demo.service - example service file for running the Python application as a service.

# Running the Python application
python3 logging_demo.py

OR

chmod +x logging_demo.py
./logging_demo.py

# How to enable the service
In loggind_demo.service, modify ExecStart= to point to the location of logging_demo.py. If the file is located inside a home directory of a user (and not in a system-wide location such as /usr or /opt), you must also replace the user nobody in User=nobody with your username.

Copy the .service file into /etc/systemd/system/logging_demo.service

Reload systemd so that it knows about your new service:
sudo systemctl daemon-reload

Start the service:
sudo systemctl start logging_demo.service

If you want to enable/disable running the service on system startup, you can use:
sudo systemctl enable logging_demo.service
sudo systemctl disable logging_demo.service

# Viewing service logs
journalctl -u logging_demo.service -f

OR

journalctl -u logging_demo.service --no-pager

