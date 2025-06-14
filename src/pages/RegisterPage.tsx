import React from "react";
import { Link } from "@tanstack/react-router";
import { useRegister } from "../hooks/register.hook";
import type { RegisterPayload } from "../api/auth";

export default function RegisterPage() {
  const register = useRegister();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: RegisterPayload = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      nick: formData.get("nick") as string,
    };
    // wywołujemy mutation
    register.mutate(payload);
  };

  return (
    <div className="wrapper">
      <p>Zarejestruj się</p>
      <form className="form_wrapper" onSubmit={handleSubmit}>
        <input
          className="form_wrapper_input"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="form_wrapper_input"
          type="text"
          name="nick"
          placeholder="Nick"
        />
        <input
          className="form_wrapper_input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <div className="form_buttons_wrapper">
          <p className="form_textbutton">
            Have account? <Link to="/login">Sign&nbsp;in</Link>
          </p>
          <button className="form_button" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
