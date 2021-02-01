import Topic from "../Topic";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

describe("Topic Component", () => {
  it("should render without crash", () => {
    const component = shallow(
      <Topic topic={{ name: "react", stargazerCount: 100 }} />
    );
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("should print the passed props in the name and count", () => {
    const component = shallow(
      <Topic topic={{ name: "angular", stargazerCount: 999 }} />
    );
    expect(component.find(".topic-name").text()).toEqual("angular");
    expect(component.find(".topic-star-count").text()).toEqual("999");
  });

  it("should call the callback on topic click", () => {
    const topic = { name: "vue", stargazerCount: 999 };
    const mockFunc = jest.fn();
    const component = shallow(
      <Topic topic={topic} setShowRelated={mockFunc} />
    );
    component.find(".topic").simulate("click");
    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveBeenCalledWith(true);
  });
});
