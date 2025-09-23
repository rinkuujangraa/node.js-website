import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const subscriptionSchema = z.object({
  email: z.string().email(),
  userId: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, userId } = subscriptionSchema.parse(body)

    // Check if email already exists
    const existingSubscription = await prisma.subscription.findUnique({
      where: { email },
    })

    if (existingSubscription) {
      if (existingSubscription.active) {
        return NextResponse.json(
          { message: 'Email already subscribed' },
          { status: 400 }
        )
      } else {
        // Reactivate subscription
        const subscription = await prisma.subscription.update({
          where: { email },
          data: { active: true },
        })
        return NextResponse.json(subscription)
      }
    }

    // Create new subscription
    const subscription = await prisma.subscription.create({
      data: {
        email,
        userId,
        active: true,
      },
    })

    // In a real app, you'd send a welcome email here
    console.log(`New subscription: ${email}`)

    return NextResponse.json(subscription, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    console.error('Error creating subscription:', error)
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    )
  }
}
