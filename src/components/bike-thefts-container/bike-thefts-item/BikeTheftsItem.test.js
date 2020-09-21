import React from "react";
import { shallow } from "enzyme";
import BikeTheftsItem from "./BikeTheftsItem";

describe("Test BikeTheftsItem functionality", () => {
  const bikeItem = {
    id: 127353,
    title: "Parking - Abandoned Vehicle",
    description:
      "This Toyota crossover / SUV has been parked on Richmond Blvd for months. There is a bicycle sitting in the back seat and a bike rack on the back of the car. It’s been here for so long that it leaves no other conclusion other than the fact that it’s been abandoned. ",
    address: "3025 Richmond Blvd Oakland, CA, 94611, USA",
    occurred_at: 1600399686,
    updated_at: 1600413286,
    url: "https://bikewise.org/api/v1/incidents/127353",
    source: {
      name: "SeeClickFix.com",
      html_url: "https://seeclickfix.com/issues/8606554",
      api_url: "https://seeclickfix.com/api/v2/issues/8606554",
    },
    media: {
      image_url:
        "https://seeclickfix.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeklQT1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0e48feee690db869d5220afc70a76f25fa0e0a31/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9RWVhWMGIxOXZjbWxsYm5SVU9ncHpkSEpwY0ZRNkMzSmxjMmw2WlVraUREZ3dNSGcyTURBR09nWkZWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--0a54b8f8956b3b13ab7a9e97d1d66e008d130064/8A9DF9BE-797C-486E-99E7-5A4AA22D4028.jpeg",
      image_url_thumb:
        "https://seeclickfix.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeklQT1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0e48feee690db869d5220afc70a76f25fa0e0a31/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDam9RWVhWMGIxOXZjbWxsYm5SVU9ncHpkSEpwY0ZRNkMzSmxjMmw2WlVraURURXdNSGd4TURCZUJqb0dSVlE2REdkeVlYWnBkSGxKSWd0alpXNTBaWElHT3doVU9ndGxlSFJsYm5SSklnd3hNREI0TVRBd0Jqc0lWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--59a940dfa7d188e4139c02ee5a1f675b11244b3c/8A9DF9BE-797C-486E-99E7-5A4AA22D4028.jpeg",
    },
    location_type: null,
    location_description: null,
    type: "Theft",
    type_properties: null,
  };

  const wrapper = shallow(<BikeTheftsItem bikeItem={bikeItem} />);

  it("should check case title is rendering", () => {
    expect(wrapper.find("#bike-item-title-link").text()).toEqual(
      "Parking - Abandoned Vehicle"
    );
  });
});
