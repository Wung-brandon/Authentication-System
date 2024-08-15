import React from 'react'

function HomePage() {
  return (
    <div>
      
          <div className="jumbotron text-center bg-info w-100" style={{padding:"4rem"}}>
            <div style={{paddingLeft:"20px"}}>
              <h2 className='text-capitalize display-4'>Hello, World!</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem beatae harum quaerat animi nostrum, 
                mollitia non aut iusto modi unde numquam ad quasi sequi, ea reprehenderit quam corporis possimus eum.</p>
                <button className="btn btn-primary btn-lg">Learn More &raquo;</button>
            </div>
          </div>

        <div className="container">
          <div className="row mt-4">
              <div className="col-4">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur culpa recusandae totam eius ea maxime quod aut!
                  Quidem eius vitae magnam facilis architecto perferendis unde quia distinctio reprehenderit perspiciatis?</p>
                <button className="btn btn-secondary">View Details &raquo;</button>
              </div>

              <div className="col-4">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur culpa recusandae totam eius ea maxime quod aut!
                  Quidem eius vitae magnam facilis architecto perferendis unde quia distinctio reprehenderit perspiciatis?</p>
                <button className="btn btn-secondary">View Details &raquo;</button>
              </div>

              <div className="col-4">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur culpa recusandae totam eius ea maxime quod aut!
                  Quidem eius vitae magnam facilis architecto perferendis unde quia distinctio reprehenderit perspiciatis?</p>
                <button className="btn btn-secondary">View Details &raquo;</button>
              </div>

              <div className="border-bottom border-dark mt-5 opacity-0.5"></div>
              <p className="mt-2">&copy;Wung 2024-2025</p>
            </div>
        </div>

     


  
    </div>
  )
}

export default HomePage