//data
export const userData = {
  firstName: "bahrul05",
  lastName: "yows",
  address: "District 7",
  city: "New york",
  state: "USA",
  zipCode: "1289",
  phone: "08675768754",
  ssn: "746738",
  username: "bahrul05",
  password: "12345",
  validConfirm: "12345",
  invalidConfirm: "54321",
};

export const invalidUser = {
  username: "bahruls",
  password: "54321",
};

//element
export const button = "input.button";

export const forgot = {
  firstName: 'input[name="firstName"]',
  lastName: 'input[name="lastName"]',
  address: 'input[name="address.street"]',
  city: 'input[name="address.city"]',
  state: 'input[name="address.state"]',
  zipCode: 'input[name="address.zipCode"]',
  ssn: 'input[name="ssn"]',
  btnForgot: "Find My Login Info",
};

describe("Para Bank Test Authentication", () => {
  it("Visit Para Bank Web", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });
});

describe("Forgot Login Feature", () => {
  it("Verify get login info by input incorrect user data details", () => {
    cy.contains("Forgot login info?").click();
    //Input Forgot Login Form
    cy.get(forgot.firstName).type(invalidUser.password);
    cy.get(forgot.lastName).type(invalidUser.password);
    cy.get(forgot.address).type(invalidUser.username);
    cy.get(forgot.city).type(invalidUser.username);
    cy.get(forgot.state).type(invalidUser.password);
    cy.get(forgot.zipCode).type(invalidUser.password);
    cy.get(forgot.ssn).type(invalidUser.password);

    cy.get(button).contains(forgot.btnForgot).click();

    //Successfully displayed username and password
    cy.contains("The customer information provided could not be found.");
  });
  it("Verify get valid username and password", () => {
    cy.contains("Forgot login info?").click();
    //Input Forgot Login Form
    cy.get(forgot.firstName).type(userData.firstName);
    cy.get(forgot.lastName).type(userData.lastName);
    cy.get(forgot.address).type(userData.address);
    cy.get(forgot.city).type(userData.city);
    cy.get(forgot.state).type(userData.state);
    cy.get(forgot.zipCode).type(userData.zipCode);
    cy.get(forgot.ssn).type(userData.ssn);

    cy.get(button).contains(forgot.btnForgot).click();

    //Successfully displayed username and password
    cy.contains(userData.username);
    cy.contains(userData.password);
  });
});
