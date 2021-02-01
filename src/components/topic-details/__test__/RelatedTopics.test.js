import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import RelatedTopics from "../RelatedTopics";

describe("Related Topics Component", () => {
  it("should render wihtout crash", () => {
    const repoNode = {
      topic: { relatedTopics: [{ name: "angular", stargazerCount: 10 }] },
    };
    const mockFun = jest.fn();
    const component = shallow(
      <RelatedTopics repoNode={repoNode} setShowRelated={mockFun} />
    );
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("should render no related topic found text on empty related topics", () => {
    const repoNode = {
      topic: { relatedTopics: [] },
    };
    const mockFun = jest.fn();
    const component = shallow(
      <RelatedTopics repoNode={repoNode} setShowRelated={mockFun} />
    );

    const divNode = component.find(".no-data-text");
    expect(divNode.text()).toBe("No related topics found.");
  });

  it("should call the setShowRelated method with false value", () => {
    const repoNode = {
      topic: { relatedTopics: [] },
    };
    const mockFun = jest.fn();
    const component = shallow(
      <RelatedTopics repoNode={repoNode} setShowRelated={mockFun} />
    );
    component.find(".close-btn").simulate("click");
    expect(mockFun).toHaveBeenCalledTimes(1);
    expect(mockFun).toHaveBeenCalledWith(false);
  });
});
