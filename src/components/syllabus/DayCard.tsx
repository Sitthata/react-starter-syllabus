import { cn } from '@/lib/utils'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { buttonVariants } from '@/components/ui/button'

type DayCardProps = {
  data: CardData
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const DayCard = ({ data, className, ...props }: DayCardProps) => {
  return (
    <div
      className={cn(
        'mt-8 flex flex-col gap-3 rounded-sm p-3 outline outline-1 outline-border',
        className
      )}
      {...props}
    >
      <h1 className="font-mono text-xl font-bold">DAY 0{data.day}</h1>
      <h2 className="text-lg font-semibold">{data.topic}</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{data.topic}</AccordionTrigger>
          <AccordionContent>
            {data.description ?? 'No description'}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-end space-x-2 py-2">
        <a
          className={buttonVariants({ variant: 'outline' })}
          href="https://chatgpt.com/"
          target="_blank"
        >
          สไลด์
        </a>
        <a
          className={buttonVariants({ variant: 'default' })}
          href="https://chatgpt.com/"
          target="_blank"
        >
          Material
        </a>
      </div>
    </div>
  )
}

export default DayCard
