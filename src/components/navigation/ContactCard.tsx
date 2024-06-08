import React from 'react'

const ContactCard = () => {
  const contactData = [
    {
      id: 1,
      name: 'พี่เฟิร์ส',
      discord: 'Sitthata',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'พี่เฟม',
      discord: 'famenu',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ]
  return (
    <>
      <div className="grid gap-2 p-1 w-[250px] lg:w-[350px] lg:grid-cols-[.75fr_1fr]">
        {contactData.map((data) => (
          <div
            className="flex cursor-pointer space-x-3 rounded-sm p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
            key={data.id}
          >
            <img
              src={data.avatar}
              alt="portrait"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h1 className="text-lg font-semibold">{data.name}</h1>
              <p>discord: {data.discord}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ContactCard
