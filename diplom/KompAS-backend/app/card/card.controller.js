import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

//@desc Card order
//@route GET /api/card
//@access Private

const fakeDataCard = [
  {
    id: 1000,
    title: 'Iphone 15',
    description: '256 GB Чёрный',
    cost: 124000,
    image: '/uploads/card/iPhone-16.png'
  },
  {
    id: 1001,
    title: 'Samsung H235',
    description: 'Робот-пылесос',
    cost: 15000,
    image: '/uploads/card/pilesos.png'
  },
  {
    id: 1002,
    title: 'RTX 4060',
    description: 'Видеокарта MSI GeForce',
    cost: 48000,
    image: '/uploads/card/card.png'
  }
]

export const getCard = asyncHandler(async (req, res) => {
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: req.user.id
  //   },
  //   select: UserFields
  // })

  // res.json({
  //   ...user,
  //   statistic: [
  //     { label: 'Minutes', value: Math.ceil(countExerciseTimesCompleted * 2.3) },
  //     { label: 'Workouts', value: workouts },
  //     { label: 'Kgs', value: kgs._sum.weight || 0 }
  //   ]
  // })
  res.json([...fakeDataCard])
})
