# Test Case with OData "style" Path Parameter

Usually "REST" APIs are using path paramater like this:

```text
/thingies/1001
```

where `1001` is the value of the parameter.

It seems that OData is using another "style" using this:

```text
/thingies('1001')
```

In this repository, I will (try to) answer the follwoing three questions:

1. Can I define the OData "style" path parameter with OpenAPI?
2. Can I implement the OData "style" path parameter with Node.js Express?
3. Will OData "style" path parameter work with Istio?

## Can I define the OData "style" path parameter with OpenAPI?

Yes, with

```yaml
paths:
  /thingies('{thingyId}'):
    get:
```

## Can I implement the OData "style" path parameter with Node.js Express?

Yes.

## Will OData "style" path parameter work with Istio?

Yes.
