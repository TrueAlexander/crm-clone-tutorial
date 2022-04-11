import TicketCard from "../components/TicketCard"

const Dashboard = () => {

  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'NFT Safety 101 Video',
      owner: 'TrueAlexander',
      avatar: 'https://scontent.fsdu25-1.fna.fbcdn.net/v/t1.6435-9/110179096_101452034991259_718353586784810972_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TDDd7UTpQFcAX9Up6QU&_nc_ht=scontent.fsdu25-1.fna&oh=00_AT93NiPSu106lx9sAC9M3iFLIoIw6bsmT8QidU49DjvMGg&oe=627A6B19',
      status: 'done',
      priority: 5,
      progress: 40,
      description: 'Make a video showcasing how to work with NFT safely, including how to know if one is not a genuine.',
      timestamp: '2022-02-11T07:36:17+0000'
    },
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Build and sell AI Model',
      owner: 'TrueAlexander',
      avatar: 'https://scontent.fsdu25-1.fna.fbcdn.net/v/t1.6435-9/110179096_101452034991259_718353586784810972_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TDDd7UTpQFcAX9Up6QU&_nc_ht=scontent.fsdu25-1.fna&oh=00_AT93NiPSu106lx9sAC9M3iFLIoIw6bsmT8QidU49DjvMGg&oe=627A6B19',
      status: 'working on it',
      priority: 2,
      progress: 70,
      description: 'Make a video about AI.',
      timestamp: '2022-02-13T07:36:17+0000'
    },
    {
      category: 'Q2 2022',
      color: 'blue',
      title: 'Build a bot',
      owner: 'TrueAlexander',
      avatar: 'https://scontent.fsdu25-1.fna.fbcdn.net/v/t1.6435-9/110179096_101452034991259_718353586784810972_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TDDd7UTpQFcAX9Up6QU&_nc_ht=scontent.fsdu25-1.fna&oh=00_AT93NiPSu106lx9sAC9M3iFLIoIw6bsmT8QidU49DjvMGg&oe=627A6B19',
      status: 'working on it',
      priority: 3,
      progress: 10,
      description: 'Make a video about making a bot.',
      timestamp: '2022-02-15T07:36:17+0000'
    }
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({category}) => category))
  ]

  console.log(uniqueCategories);
  return (
    <div className="dashboard"> 
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets.filter(ticket => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard
                  id = {_index}
                  color = {filteredTicket.color}
                  ticket = {filteredTicket}

                />
              ))
            }
          </div>
        ) )}
      </div>
    </div>
  )
}

export default Dashboard