// src/pages/EventDetailsPage.js
// Detailed view of a specific event with full information and countdown

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import '../styles/EventDetailsPage.css';

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample events data (same as EventsPage - in real app, would fetch from database)
  const events = [
    {
      id: 1,
      title: 'Annual Tech Conference 2026',
      date: '2026-03-15T09:00:00',
      location: 'San Francisco Convention Center',
      address: '747 Howard St, San Francisco, CA 94103',
      description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovators.',
      details: 'This premier technology conference brings together the brightest minds in the industry. Attend keynote speeches, workshops, and networking sessions. Learn about the latest trends in AI, cloud computing, and software development.',
      organizer: 'Tech Events Inc.',
      capacity: '500 attendees',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Product Launch Event',
      date: '2026-02-20T14:00:00',
      location: 'Virtual Event',
      address: 'Online via Zoom',
      description: 'Be the first to witness our groundbreaking new product unveiling.',
      details: 'Experience the future of innovation as we unveil our latest product line. This virtual event will feature live demonstrations, Q&A sessions with our product team, and exclusive early-bird offers for attendees.',
      organizer: 'Innovation Labs',
      capacity: 'Unlimited',
      category: 'Product Launch'
    },
    {
      id: 3,
      title: 'Team Building Workshop',
      date: '2026-02-25T10:00:00',
      location: 'Corporate Headquarters',
      address: '123 Business Ave, Suite 400',
      description: 'Interactive workshop focused on collaboration and team dynamics.',
      details: 'Strengthen your team with our professionally-led workshop. Activities include problem-solving challenges, communication exercises, and collaborative projects designed to improve team cohesion and productivity.',
      organizer: 'HR Department',
      capacity: '30 participants',
      category: 'Training'
    },
    {
      id: 4,
      title: 'Networking Mixer',
      date: '2026-03-05T18:00:00',
      location: 'Downtown Event Space',
      address: '456 Network Blvd, Downtown',
      description: 'Connect with professionals from various industries in a relaxed setting.',
      details: 'An evening of professional networking in a casual atmosphere. Meet peers from diverse industries, exchange ideas, and build valuable connections. Complimentary refreshments and appetizers will be served.',
      organizer: 'Professional Network Group',
      capacity: '100 attendees',
      category: 'Networking'
    },
    {
      id: 5,
      title: 'Innovation Summit',
      date: '2026-04-10T08:30:00',
      location: 'New York City',
      address: 'Javits Center, 655 W 34th St, New York, NY',
      description: 'Explore the latest trends in technology and innovation with thought leaders.',
      details: 'A full-day summit featuring panels, workshops, and keynotes from industry pioneers. Topics include emerging technologies, sustainable innovation, and digital transformation strategies.',
      organizer: 'Global Innovation Forum',
      capacity: '1000 attendees',
      category: 'Conference'
    },
    {
      id: 6,
      title: 'Quarterly Business Review',
      date: '2026-03-28T13:00:00',
      location: 'Conference Room A',
      address: 'Main Office Building, 3rd Floor',
      description: 'Review Q1 performance and plan strategies for the upcoming quarter.',
      details: 'Comprehensive review of first quarter results, analysis of key metrics, and strategic planning session for Q2. All department heads are expected to present their progress and objectives.',
      organizer: 'Executive Team',
      capacity: '25 participants',
      category: 'Business Meeting'
    }
  ];

  // Find the specific event
  const event = events.find(e => e.id === parseInt(id));

  // If event not found, show error
  if (!event) {
    return (
      <div className="event-details-page">
        <div className="event-not-found">
          <h2>Event Not Found</h2>
          <p>The event you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/events')} className="back-btn">
            Back to Events
          </button>
        </div>
      </div>
    );
  }

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

  return (
    <div className="event-details-page">
      <div className="event-details-container">
        <button onClick={() => navigate('/events')} className="back-btn">
          ← Back to Events
        </button>

        <div className="event-details-card">
          <div className="event-header-section">
            <div className="event-category-badge">{event.category}</div>
            <h1 className="event-details-title">{event.title}</h1>
            <p className="event-description">{event.description}</p>
          </div>

          <div className="countdown-section">
            <h3>Time Until Event</h3>
            <CountdownTimer targetDate={event.date} />
          </div>

          <div className="event-info-grid">
            <div className="info-item">
              <div className="info-icon">📅</div>
              <div className="info-content">
                <h4>Date & Time</h4>
                <p>{formatDate(event.date)}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Location</h4>
                <p>{event.location}</p>
                <p className="info-secondary">{event.address}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">👥</div>
              <div className="info-content">
                <h4>Capacity</h4>
                <p>{event.capacity}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🏢</div>
              <div className="info-content">
                <h4>Organizer</h4>
                <p>{event.organizer}</p>
              </div>
            </div>
          </div>

          <div className="event-details-section">
            <h3>About This Event</h3>
            <p>{event.details}</p>
          </div>

          <div className="event-actions">
            <button className="action-btn primary">
              Add to Calendar
            </button>
            <button className="action-btn secondary">
              Share Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
