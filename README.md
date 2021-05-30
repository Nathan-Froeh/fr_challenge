# Required Back End - [Modified Back End](https://github.com/Nathan-Froeh/fr_backend) - [Original Back End](https://github.com/fast-radius/fe-challenge/)
Most browsers like Chrome limit the headers returned from an api call making it impossible to get the pagination headers returned from the get parts api call.

I updated the endpoint to return the pagination data by adding this.

```cors({exposedHeaders: ['per-page', 'page-number', 'total-entries', 'total-pages']})```

Also, one of the requirements was to return a list of 5 items at a time from the get parts api call while the server only actually returns 4 at a time.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Acceptance Criteria

- [x] Part names are displayed in a list from the server
- [ ] Part list is paginated, 5 per page - (The back end only returns 4 parts at a time)
- [x] You can move between pages
- [x] Each part renders a Quantity input
- [x] You can "Save" each Part using a `PUT` request
  
  Testing - (I ran short on time due to leaving for my sisters wedding and was not able to get around to testing)
  [Check this out for some example tests I have done in the past](https://github.com/Nathan-Froeh/Dad-Simulator)
