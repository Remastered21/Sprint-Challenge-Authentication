<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware: a pre or post hooks functions which are passed control during execution of asynchronous functions.
Session: a middleware that act as a place to store data that you want access to across requests, such as cookies.
bcrypt: password hashing functin/encryptor that makes brute-force search attacks very hard by lengthening password passed between requests.
JWT: Token generator that securely trasmits information between parties as JSON object, primarily used as authentication tool.  
2.  What does bcrypt do in order to prevent attacks?
bcrypt returns a hashed value from regular password, meaning it takes an input and turns it into a fixed-size alphanumeric string; longer password = longer time to crack.
3.  What are the three parts of the JSON Web Token?
Header, Payload, Signature.