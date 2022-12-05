//data
export const validUser = {
  username: "bahrul05",
  password: "12345",
};

export const invalidUser = {
  username: "invallliids",
  password: "54321",
};
export const userData = {
  firstName: "bahrul05",
  lastName: "yows",
  address: "District 7 ",
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
//element
export const login = {
  username: 'input[name="username"]',
  password: 'input[name="password"]',
  btnLogin: "Log In",
};

export const button = "input.button";

//
describe("Para Bank Test Authentication", () => {
  it("Visit Para Bank Web", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });
});

describe("Login Function", () => {
  it("Login with Valid User", () => {
    cy.reload();
    //Input Login Form
    cy.get(login.username).type(validUser.username);
    cy.get(login.password).type(validUser.password);

    cy.get(button).contains(login.btnLogin).click();

    //Unsuccessfully 
    cy.contains(`Welcome ${userData.firstName} ${userData.lastName}`);
    cy.contains("Log Out").click();
  });
  
  it("Login with Invalid User", () => {
    cy.reload();
    //Input Login 
    cy.get(login.username).type(invalidUser.username);
    cy.get(login.password).type(invalidUser.password);

    cy.get(button).contains(login.btnLogin).click();

    //Unsuccessfully 
    cy.contains("An internal error has occurred and has been logged.");
    // cy.contains("Log Out").click();
  });

  it("Login with fields blank", () => {
    cy.reload();
    //Input Login Form
    cy.get(login.username).type(invalidUser.username);
    cy.get(login.password).focus().blur();

    cy.get(button).contains(login.btnLogin).click();

    //Unsuccessfully 
    cy.contains("Please enter a username and password.");
  });

  
});
