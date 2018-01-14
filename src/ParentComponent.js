import React from 'react'

export const ParentComponent = () => {
  const letMeKnowAboutSomeThing = () => console.log('something happened');

  return <ChildComponent letMeKnowAboutSomeThing={letMeKnowAboutSomeThing} />;
};

const ChildComponent = props => {
  const onClick = e => {
    e.preventDefault();
    props.letMeKnowAboutSomeThing();
  };
  return <a onClick={onClick}>Click me!</a>;
}