/* eslint-disable no-undef */
import React from 'react';
import { useState, useEffect } from 'react';
import useAxios from '../utils/useAxios';
import { jwtDecode } from "jwt-decode";
import { Card, Row, Col, Table } from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import { Line } from 'react-chartjs-2';
import Swal from 'sweetalert2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DashboardPage() {
  // Sample data for charts and table
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [3000, 4000, 3500, 5000, 7000, 6000],
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const [res, setRes] = useState("")
  const api = useAxios()
  const token = localStorage.getItem("authTokens")

  if (token){
    var decode = jwtDecode(token)
    var user_id = decode.user_id
    var username = decode.username
    var image = decode.image
    var full_name = decode.full_name
    Swal.fire({
      title: `Welcome back ${username}`,
      timer: 5000,
      toast: true,
      icon: "success",
      position: 'top-right',
      timerProgressBar: true,
      showConfirmButton: false
    })
    
  }

  const userOrders = [
    { id: 1, name: 'John Doe', order: 'Order #1234', amount: '$150' },
    { id: 2, name: 'Jane Smith', order: 'Order #1235', amount: '$200' },
    { id: 3, name: 'Michael Johnson', order: 'Order #1236', amount: '$250' },
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100 p-4">
        <h2 className="display-4">Welcome back<span className='text-info'> {username}!</span></h2>
        <h2>Dashboard</h2>
        <Row className="my-4">
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Total Sales</Card.Title>
                <Card.Text>$50,000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>New Users</Card.Title>
                <Card.Text>1,200</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Pending Orders</Card.Title>
                <Card.Text>45</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Chart Section */}
        <Row className="my-4">
          <Col md={12}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Sales Overview</Card.Title>
                <Line data={salesData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* User Orders Table */}
        <Row className="my-4">
          <Col md={12}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>User Orders</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Order</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userOrders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.name}</td>
                        <td>{order.order}</td>
                        <td>{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DashboardPage;
