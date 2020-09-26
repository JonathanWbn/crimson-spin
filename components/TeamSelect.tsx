import React from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'

import { teamMembers } from '../data'
import styles from './TeamSelect.module.css'

interface TeamSelectProps {
  population: string[]
  onChange: (population: string[]) => void
}

export default function TeamSelect({ population, onChange }: TeamSelectProps) {
  function handleToggle(member: string, checked: boolean) {
    if (checked) {
      onChange([...population, member])
    } else {
      const newPopulation = [...population]
      newPopulation.splice(population.indexOf(member), 1)
      onChange(newPopulation)
    }
  }

  const sortedMembers = teamMembers
    .map((member) => member.name)
    // sort alphabetically
    .sort()
    // move selected members to the top
    .sort((a, b) => (population.includes(a) && !population.includes(b) ? -1 : 1))

  return (
    <Flipper flipKey={sortedMembers.join('')}>
      <div className={styles.box}>
        {sortedMembers.map((member) => (
          <Flipped key={member} flipId={member}>
            <label className={styles.row}>
              <input
                checked={population.includes(member)}
                type="checkbox"
                className={styles.checkbox}
                onChange={(e) => handleToggle(member, e.target.checked)}
              />
              <span className={styles.name}>{member}</span>
              {population.includes(member) ? <Checked /> : <UnChecked />}
            </label>
          </Flipped>
        ))}
      </div>
    </Flipper>
  )
}

function Checked() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
    </svg>
  )
}

function UnChecked() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z" />
    </svg>
  )
}
