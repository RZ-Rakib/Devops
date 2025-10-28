#!/usr/bin/env python3
import logging
import time

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def main():
    count = 0
    while True:
        logging.debug(f"Debug message {count}")
        logging.info(f"Info message {count}")
        logging.warning(f"Warning message {count}")
        logging.error(f"Error message {count}")
        logging.critical(f"Critical message {count}")
        count += 1
        time.sleep(5)  # wait 5 seconds before next batch

if __name__ == "__main__":
    main()

