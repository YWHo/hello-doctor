import React from 'react'
import NavBar from './NavBar'

import renderer from 'react-test-renderer'

describe('NavBar', () => {
  it('render correctly', () => {
    const component = renderer.create(<NavBar />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
