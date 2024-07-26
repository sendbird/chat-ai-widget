import { asSafeURL } from '../../utils';

describe('asSafeURL', () => {
  test('should return the same URL if it is already safe', () => {
    expect(asSafeURL('http://example.com')).toBe('http://example.com');
    expect(asSafeURL('https://example.com')).toBe('https://example.com');

    expect(asSafeURL('https://example.com/path/path2')).toBe('https://example.com/path/path2');
    expect(asSafeURL('https://example.com?test=%')).toBe('https://example.com?test=%');
  });

  test('should return a safe URL if it is not safe', () => {
    expect(asSafeURL('javascript:alert(1)')).toBe('#');
    expect(asSafeURL('javascript%3Aalert%281%29')).toBe('#');
    expect(asSafeURL('data:text/html;base64,ABCDE==')).toBe('#');
  });

  test('should append a https:// protocol to the URL if it is missing', () => {
    expect(asSafeURL('example.com')).toBe('https://example.com');

    expect(asSafeURL('example.com/path/path2')).toBe('https://example.com/path/path2');
    expect(asSafeURL('example.com?test=%')).toBe('https://example.com?test=%');
  });
});
