import React from "react";

const Blogs = () => {
  return (
    <div className="md:py-16 shadow-md sm:py-12 py-8 lg:px-16 md:px-12 sm:px-8 px-2">
      <h1 className="md:text-4xl text-center sm:text-2xl text-md font-bold text-black">
        Here are some important{" "}
        <span className="text-blue-400">questions and answers!!</span>
      </h1>
      <div className="grid grid-cols-1 md:pt-12 sm:pt-4 pt-2">
        <div>
          <p className="font-bold text-blue-400 sm:text-xl text-md">
            What are the different ways to manage a state in a React
            application?
          </p>
          <div className="text-sm">
            There are four main types of state you need to properly manage in
            your React apps: <br />
            1. Local state: Local state is data we manage in one or another
            component. <br />
            2. Global state: Global state is data we manage across multiple
            components. <br />
            3. Server state: Data that comes from an external server that must
            be integrated with our UI state. <br />
            4. URL state: Data that exists on our URLs, including the pathname
            and query parameters. <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <p className="font-bold text-blue-400 sm:text-xl text-md">
            How does prototypical inheritance work?
          </p>
          <div className="text-sm">
            Every object with its methods and properties contains an internal
            and hidden property known as Prototype. The Prototypal Inheritance
            is a feature in javascript used to add methods and properties in
            objects. It is a method by which an object can inherit the
            properties and methods of another object. <br />
            Prototypal Inheritance is a mechanism in which an object (or a
            function constructor) can extend methods of another object. Every
            object has a prototype which is a link the parent object, this
            structure is called prototype chain.
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <p className="font-bold text-blue-400 sm:text-xl text-md">
            What is a unit test? Why should we write unit tests?
          </p>
          <div className="text-sm">
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. <br /> Unit testing is
            an important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
            <br />A unit test typically comprises of three stages: plan, cases
            and scripting and the unit test itself. In the first step, the unit
            test is prepared and reviewed. The next step is for the test cases
            and scripts to be made, then the code is tested.
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <p className="font-bold text-blue-400 sm:text-xl text-md">
            React vs. Angular vs. Vue?
          </p>
          <span className="text-sm">
            <span className="font-bold text-red-400">What is Angular?</span>
            <br />
            <span>
              AngularJS was developed in 2009 by Google. The first version was
              Angular.JS. Angular is currently known as a JavaScript framework.
              Obviously, all significant Google projects have been developed
              with Angular. Angular.js is an MVC framework. A major disadvantage
              of Angular is that it uses a regular DOM, and thus, the entire
              tree structure of the HTML tags is updated, which massively
              impacts the loading time. Angular.js has its Ionic framework for
              mobile applications.
            </span>{" "}
            <br />
            <br />
            <span className="font-bold text-red-400">What is React?</span>
            <br />
            <span>
              Facebook released React.js in March 2013 as a JavaScript library.
              Because React just provides one view, it is not appropriate for
              building an MVC architecture: you must solve the model and
              controller yourself. Besides this, there are only advantages and
              lots of advantages. One of the biggest of them is that React.js
              uses a virtual DOM that only compares the previous HTML code
              differences and only loads the different parts. This significantly
              impacts the loading times. In a positive way, of course. With
              React.js, you handle the markup and the logic in the same file,
              which means you can output variables in a view component (JSX).
              React offers a type of mobile solutions for applications called
              React-Native.
            </span>
            <br />
            <br />
            <span className="font-bold text-red-400">What is Vue?</span>
            <br />
            <span>
              Vue.js is a JavaScript-based progressive framework for creating
              single-page applications. It was created with scalability and
              incrementality in mind, as well as ease of integration with other
              view layer frameworks. Vue is built from the bottom up to be
              progressively adaptable, unlike other monolithic frameworks. The
              core library focuses solely on the view layer, and it’s simple to
              use and connect with other libraries or applications. This
              framework’s fast learning angle is almost a trademark. It’s a
              flexible framework that may be used as a library or a full-fledged
              framework for developing large web applications. Vue.js combines
              the useful principles of the Angular and React frameworks and
              presents them in a minimalistic modern style. Web developers use
              Vue.js to create frontend user interfaces for web-based and hybrid
              mobile applications.
            </span>
            <br />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
