"""
Automated UI tests for the LAB.fi website using Selenium WebDriver and pytest.

This test suite verifies basic page functionality and content, including:
- Page title verification
- Meta description correctness
- Page navigation and interaction with elements such as links and cookie banners
- Taking a screenshot of the front page for audit purposes.

Works on macOS, Windows, and Linux.
"""

import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


# ---------------------------------------------------------------------------
# FIXTURE: Set up and tear down Chrome browser
# ---------------------------------------------------------------------------

@pytest.fixture
def driver():
    """
    Initializes a Chrome WebDriver instance using ChromeDriverManager.

    Fixes macOS gray/black screen issue by disabling GPU rendering
    and setting a consistent window size.
    """
    service = Service(ChromeDriverManager().install())

    options = webdriver.ChromeOptions()

    # FIX: Disable GPU and scaling issues on macOS
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--window-size=1280,900")

    # Uncomment the next line if you want headless mode (no visible browser)
    # options.add_argument("--headless=new")

    driver = webdriver.Chrome(service=service, options=options)
    driver.maximize_window()

    yield driver
    driver.quit()


# ---------------------------------------------------------------------------
# TEST 1: Verify the page title
# ---------------------------------------------------------------------------

def test_lab_fi_title(driver):
    print("\n[TEST] Checking for correct page title")

    driver.get("https://lab.fi/en")

    # Wait until the main body is loaded
    WebDriverWait(driver, 15).until(
        EC.presence_of_element_located((By.TAG_NAME, "body"))
    )

    print("Page loaded. Title is:", driver.title)
    assert "LAB University of Applied Sciences" in driver.title

    # Optional: Pause for visibility
    time.sleep(2)


# ---------------------------------------------------------------------------
# TEST 2: Verify the meta description
# ---------------------------------------------------------------------------

def test_lab_fi_meta_description(driver):
    print("\n[TEST] Checking for correct meta description")

    driver.get("https://lab.fi/en")
    WebDriverWait(driver, 15).until(
        EC.presence_of_element_located((By.TAG_NAME, "body"))
    )

    # Method 1: XPath
    meta_desc = driver.find_element(By.XPATH, "//head/meta[@name='description']")
    desc_text = meta_desc.get_attribute("content")
    print("Meta description found (XPath):", desc_text)

    assert "LAB is a higher education institution" in desc_text

    # Optional pause to visually confirm
    time.sleep(2)


# ---------------------------------------------------------------------------
# TEST 3: Navigate to "News and Stories"
# ---------------------------------------------------------------------------

def test_page_navigation(driver):
    print("\n[TEST] Checking page navigation to 'News and Stories'")

    driver.get("https://lab.fi/en")
    WebDriverWait(driver, 15).until(
        EC.presence_of_element_located((By.TAG_NAME, "body"))
    )

    # Try to handle cookie popup if present
    try:
        cookie_button = WebDriverWait(driver, 5).until(
            EC.element_to_be_clickable((By.ID, "ppms_cm_reject-all"))
        )
        cookie_button.click()
        print("Cookie banner dismissed.")
    except Exception:
        print("No cookie banner found, continuing...")

    # Locate and click the "News and Stories" link by its data attribute
    link = driver.find_element(By.CSS_SELECTOR, 'a[data-drupal-link-system-path="node/5"]')
    link.click()
    print("Clicked the 'News and Stories' link.")

    # Wait for the new page to load
    WebDriverWait(driver, 10).until(EC.url_contains("/news-and-stories"))

    current_url = driver.current_url
    print("Navigated to:", current_url)
    assert "/news-and-stories" in current_url

    time.sleep(2)


# ---------------------------------------------------------------------------
# TEST 4: Capture a screenshot of the front page
# ---------------------------------------------------------------------------

def test_front_page(driver):
    print("\n[TEST] Capturing a screenshot of the front page")

    driver.get("https://lab.fi/en")

    WebDriverWait(driver, 15).until(
        EC.presence_of_element_located((By.TAG_NAME, "body"))
    )

    timestamp = int(time.time())
    screenshot_file = f"screenshot_{timestamp}.png"
    driver.save_screenshot(screenshot_file)
    print(f"Screenshot saved as: {screenshot_file}")

    time.sleep(2)
