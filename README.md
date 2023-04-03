Hello, thank you for choosing to use my application. I am going to mention some tips to help you get started with using the application.

Overview: 
This application provides the framework to start coding a banking web application. There are GET, POST, PATCH, and DELETE methods that are utilized to interact with MongoDB. The user can create records that represent different models like: customers, loan accounts, and loan ledgers. There is one model that includes a nested document structure that enables the user to attach a user to a certain loan account. 

Interacting:
You can interact with MongoDB using PostMan or whatever other tool that you choose. All values should be submitted as JSON strings and you can tweak the validation to your liking. 

Subdocument structure:
The subdocument that is included in the loan model is also validated before the data is posted to the database. That way you don't have to worry about validation for the customer, as the model object for the customer includes validation already. 

Future improvements: 
I am having a hard time creating a new user using the user model while submitting data for the loan model. The reason why I want this functionality is so that I don't have to worry about duplicating that user that was created with the loan model. I am going to keep working on this.