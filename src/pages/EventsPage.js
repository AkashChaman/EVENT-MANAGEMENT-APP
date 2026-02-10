// src/pages/EventsPage.js
// Events listing page showing all available events with countdown timers

import React from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import '../styles/EventsPage.css';

const EventsPage = () => {
  const navigate = useNavigate();

  // Sample events data (in a real app, this would come from a database)
  const events = [
    {
      id: 1,
      title: 'Annual Tech Conference 2026',
      date: '2026-03-15T09:00:00',
      location: 'San Francisco Convention Center',
      description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovators.'
    },
    {
      id: 2,
      title: 'Product Launch Event',
      date: '2026-02-20T14:00:00',
      location: 'Virtual Event',
      description: 'Be the first to witness our groundbreaking new product unveiling.'
    },
    {
      id: 3,
      title: 'Team Building Workshop',
      date: '2026-02-25T10:00:00',
      location: 'Corporate Headquarters',
      description: 'Interactive workshop focused on collaboration and team dynamics.'
    },
    {
      id: 4,
      title: 'Networking Mixer',
      date: '2026-03-05T18:00:00',
      location: 'Downtown Event Space',
      description: 'Connect with professionals from various industries in a relaxed setting.'
    },
    {
      id: 5,
      title: 'Innovation Summit',
      date: '2026-04-10T08:30:00',
      location: 'New York City',
      description: 'Explore the latest trends in technology and innovation with thought leaders.'
    },
    {
      id: 6,
      title: 'Quarterly Business Review',
      date: '2026-03-28T13:00:00',
      location: 'Conference Room A',
      description: 'Review Q1 performance and plan strategies for the upcoming quarter.'
    }
  ];

  // Format date for display
  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Navigate to event details
  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="events-page">
      <div className="events-container">
        <div className="events-header">
          <h1>My Events</h1>
          <p>Stay updated with your upcoming events and never miss a moment</p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="event-card"
              onClick={() => handleEventClick(event.id)}
            >
              <div className="event-card-header">
                <h3 className="event-title">{event.title}</h3>
                <span className="event-date">{formatDate(event.date)}</span>
              </div>

              <div className="event-location">
                <span className="location-icon">📍</span>
                <span>{event.location}</span>
              </div>

              <div className="event-countdown">
                <CountdownTimer targetDate={event.date} />
              </div>

              <button className="view-details-btn">
                View Details →
              </button>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <div className="no-events">
            <div className="no-events-icon">📅</div>
            <h3>No Events Yet</h3>
            <p>You don't have any events scheduled at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
