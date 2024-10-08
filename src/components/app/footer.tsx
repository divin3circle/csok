import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-title sm:text-5xl font-body">
              Join Our Community Today
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              Become part of the university's dedicated and driven individuals
              who are transforming the community with strong and impactful tech.
            </p>

            <a
              href="https://chat.whatsapp.com/IIRGp3f7kdjDYn57HL6UU5"
              className="mt-8 inline-block rounded-full border border-title px-12 py-3 text-sm font-medium font-body text-title"
            >
              Join Today
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
