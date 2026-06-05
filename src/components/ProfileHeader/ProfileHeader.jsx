import avatarImg from "../../assets/logo.svg";
import { DateRangePicker } from "./DateRangePicker";
import "./ProfileHeader.css";

export const ProfileHeader = ({ onDateChange }) => (
  <header className="profile-header">
    <div className="header-left">
      <div className="profile-avatar">
        <img src={avatarImg} alt="monblanproject" className="avatar-img" />
      </div>
      <div className="profile-info">
        <div className="profile-title-row">
          <h1 className="profile-name">monblanproject</h1>
          <span className="status-badge">Start on 01-06-2025</span>
        </div>
        <ul className="profile-stats">
          <li>
            <strong>870</strong> posts
          </li>
          <li>
            <strong>11,787</strong> followers
          </li>
          <li>
            <strong>112</strong> following
          </li>
        </ul>
        <DateRangePicker onDateChange={onDateChange} />
      </div>
    </div>
  </header>
);
