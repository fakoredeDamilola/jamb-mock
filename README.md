## JAMBMOCK

jambMock is a react application, created to help students prepare for the JAMB (Joint admission matriculation board) examination. A very important examination needed to enter the higher institution (university)


## STACK

* React
* Bootstrap

---

## PREVIEW

[jambMock](https://jambmock.netlify.app/)

---

## PROJECT PURPOSE AND GOAL

The plan initially was to create a simple Q & A application with HTML and CSS has a side project. But I realized I could make it better by creating it a react application that contains actually questions people could use.

I used the [aloc api](https://questions.aloc.ng/), which contains about 5000 past questions across various subjects ranging from Mathematics, English etc. I decided to create an option to set it up like the actually JAMB examination where there will be a timer and users have to select the four different subject that will be taking in the actually JAMB

## LESSON LEARNT

One of the major thing I learnt to use in this function was the promise.all method. If a user decide to take the mock exam, I had to call await function that gets all the questions in the four different subjects (which are all different API routes) before displaying anthing to the user.

For state management, contextApi was used, although there was little or no use for it because most of the requests were made in componentDidMount
