import React from 'react'
import HomeTabList from './HomeTabList'

export const HomeVisionTab = () => {
  return (
    <div className="flex gap-6 flex-col lg:flex-row p-5 rounded-md ml-1">
    <div className="max-h-full w-fit flex-[4]">
        <img
            src="https://images.unsplash.com/photo-1582792247472-c92c79ff2561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            alt="farmers"
            className="h-64 w-64 object-cover rounded-full"
        />
    </div>
    <div className="flex-[8]">
        <h1 className="text-4xl font-bold mb-2">Agriboost vision</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            tempore id, tenetur et quae commodi ducimus! Aut mollitia est
            impedit, alias cumque, sit qui quam ad, deserunt libero eum
            doloremque!
        </p>
        <HomeTabList
            list={[
                'To be the best chicken vaccination program',
                'To become the defacto standard for chicken farming app',
                'To enable farmers to make more money',
                'To empower farmers to make more money',
            ]}
        />
    </div>
</div>
  )
}
