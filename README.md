# volvo-automation-test

This repo contains a framework where you can write e2e and visual regression tests using webdriver IO.

## Setup Instructions

### Pre requisites

1. node (>v12.x)
2. docker 
Follow instructions (here)[https://docs.docker.com/desktop/#download-and-install] to install Docker desktop for Mac/Windows.   
3. docker-compose
Follow instruction (here)[https://docs.docker.com/compose/install/#install-compose] to install Docker compose. If you installed Docker desktop in the previous step then it includes docker compose as well.
### How to run tests

```bash
# clone the repo
git clone git@github.com:saranyas72/volvo-automation-test.git
# in the root directory run npm install
npm install
# run docker-compose to set up selenium hub with nodes for chrome, edge and firefox in the background
docker-compose up -d
# run tests all tests
npm run wdio
```

---
**NOTE**

To run inidividual spec files run

```bash
npx wdio run wdio.conf.js --spec ./test/specs/functional/footer.func.js
```

---

### How to add new tests

Visual regression tests can be added to test/specs/visual-regression
<br/>
E2E tests can be added to test/specs/functional

### Test cases covered

|-------|-----------------------------------------------------------------------------------------|------------------|------------|
| Test# | Test Case                                                                               | Test Suite       | Test type  |
|-------|-----------------------------------------------------------------------------------------|------------------|------------|
| 1     | should show Intro video                                                                 | Campaign.func.js | Functional |
| 2     | should show testimonial videos                                                          |                  | Functional |
| 3     | should show learn more about car safety link and redirect on click                      |                  | Functional |
| 4     | should open model detail page when clicking first model in carousel                     |                  | Functional |
| 5     | should open model detail page when clicking on 'Learn' link for first model in carousel |                  | Functional |
| 6     | should open model detail page when clicking on 'Shop' link for first model in carousel  |                  | Functional |
| 7     | should display recharge page on Recharge link click                                     |                  | Functional |
| 8     | should display mild hybrid car detail page on the link click                            |                  | Functional |
| 9     | verify the cta button should be functional from ImageWithText component                 |                  | Functional |
|-------|-----------------------------------------------------------------------------------------|------------------|------------|
| 10    | should open and close side menu                                                         | Header.func.js   | Functional |
| 11    | should show our cars dropdown                                                           |                  | Functional |
| 12    | should navigate to About Volvo -> Sustainability                                        |                  | Functional |
|-------|-----------------------------------------------------------------------------------------|------------------|------------|
| 13    | should display copyright text                                                           | Footer.func.js   | Functional |
| 14    | should have footer links  - cookies                                                     |                  | Functional |
| 15    | should have footer link  - legal                                                        |                  | Functional |
| 16    | should have footer link  - privacy                                                      |                  | Functional |
| 17    | should have footer link  - social media                                                 |                  | Functional |
| 18    | should have footer link  - tell us                                                      |                  | Functional |
|-------|-----------------------------------------------------------------------------------------|------------------|------------|
| 19    | should verify the campaign page elements in full page view                              | campaign.ux.js   | Visual     |
|-------|-----------------------------------------------------------------------------------------|------------------|------------|