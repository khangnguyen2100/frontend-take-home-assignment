import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import clsx from 'clsx'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */
const todoStatus = ['all', 'pending', 'completed']

const Index = () => {
  const [selectedStatus, setSelectedStatus] = useState('all')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        {/* tabs */}
        <Tabs.Root
          className="pt-10"
          value={selectedStatus}
          onValueChange={(value: string) => setSelectedStatus(value)}
        >
          <Tabs.List
            className="TabsList flex items-center gap-x-2"
            aria-label="Todo Status"
          >
            {todoStatus.map((status, i) => (
              <Tabs.Trigger
                key={i}
                value={status}
                className={clsx(
                  'TabsTrigger rounded-full border border-gray-200 px-6 py-3 text-sm font-bold capitalize leading-5 -tracking-tighter text-gray-700',
                  selectedStatus === status &&
                    'border-gray-700 bg-gray-700 text-white'
                )}
              >
                {status}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        <div className="pt-10">
          <TodoList selectedStatus={selectedStatus} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
