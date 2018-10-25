import React from 'react'

export default class Introduction extends React.Component {
  render () {
    return (
      <div>
        <h1 className="pageTitle">Lesson 1: Introduction</h1>
        <p>Pop Music Theory is a free online music theory, songwriting, and music production course, covering:</p>
        <li>Basics: Scales, chords, written notes</li>
        <li>Analysis: Studying why good music sounds good, to help you learn how to write music.</li>

        <h3>Why Pop Music Theory?</h3>
        <li>Real pop music: These lessons are about real, "popular" music (including rock, blues, R&B, country, jazz, etc.).</li>
        <li>We start at the beginning and explain things one step at a time.</li>
        <li>Explanations and activities: These are lessons, not just "theory facts". We explain things, include music theory games, and give you tips to use the theory to create your own music.</li>

        <h3>Next</h3>
        <li>Get advice on practicing in Lesson 2: Practicing Songwriting; -or-:</li>
        <li>Skip to the "theory facts" starting with Lesson 3: Pitch Names.</li>
    <p></p>

      </div>
    );
  }
}
