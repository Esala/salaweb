import React, { Component } from "react";
import AnimatedWrapper from "app/AnimatedWrapper";
class PageComponent extends Component {
 render() {
  return (
   <div className="page">
    <h1>Page</h1>
    <p>Hello from a sub page!</p>
   </div>
  )
 }
}
const Page = AnimatedWrapper(PageComponent);
export default Page;
