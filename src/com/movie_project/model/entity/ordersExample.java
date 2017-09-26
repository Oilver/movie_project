package com.movie_project.model.entity;

import com.movie_project.util.PaginationUtil;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ordersExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected PaginationUtil pagination;

    public ordersExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void setPagination(PaginationUtil pagination) {
        this.pagination=pagination;
    }

    public PaginationUtil getPagination() {
        return pagination;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andCliIdIsNull() {
            addCriterion("cli_id is null");
            return (Criteria) this;
        }

        public Criteria andCliIdIsNotNull() {
            addCriterion("cli_id is not null");
            return (Criteria) this;
        }

        public Criteria andCliIdEqualTo(Integer value) {
            addCriterion("cli_id =", value, "cliId");
            return (Criteria) this;
        }

        public Criteria andCliIdNotEqualTo(Integer value) {
            addCriterion("cli_id <>", value, "cliId");
            return (Criteria) this;
        }

        public Criteria andCliIdGreaterThan(Integer value) {
            addCriterion("cli_id >", value, "cliId");
            return (Criteria) this;
        }

        public Criteria andCliIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("cli_id >=", value, "cliId");
            return (Criteria) this;
        }

        public Criteria andCliIdLessThan(Integer value) {
            addCriterion("cli_id <", value, "cliId");
            return (Criteria) this;
        }

        public Criteria andCliIdLessThanOrEqualTo(Integer value) {
            addCriterion("cli_id <=", value, "cliId");
            return (Criteria) this;
        }

        public Criteria andCliIdIn(List<Integer> values) {
            addCriterion("cli_id in", values, "cliId");
            return (Criteria) this;
        }

        public Criteria andCliIdNotIn(List<Integer> values) {
            addCriterion("cli_id not in", values, "cliId");
            return (Criteria) this;
        }

        public Criteria andCliIdBetween(Integer value1, Integer value2) {
            addCriterion("cli_id between", value1, value2, "cliId");
            return (Criteria) this;
        }

        public Criteria andCliIdNotBetween(Integer value1, Integer value2) {
            addCriterion("cli_id not between", value1, value2, "cliId");
            return (Criteria) this;
        }

        public Criteria andSesIdIsNull() {
            addCriterion("ses_id is null");
            return (Criteria) this;
        }

        public Criteria andSesIdIsNotNull() {
            addCriterion("ses_id is not null");
            return (Criteria) this;
        }

        public Criteria andSesIdEqualTo(Integer value) {
            addCriterion("ses_id =", value, "sesId");
            return (Criteria) this;
        }

        public Criteria andSesIdNotEqualTo(Integer value) {
            addCriterion("ses_id <>", value, "sesId");
            return (Criteria) this;
        }

        public Criteria andSesIdGreaterThan(Integer value) {
            addCriterion("ses_id >", value, "sesId");
            return (Criteria) this;
        }

        public Criteria andSesIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("ses_id >=", value, "sesId");
            return (Criteria) this;
        }

        public Criteria andSesIdLessThan(Integer value) {
            addCriterion("ses_id <", value, "sesId");
            return (Criteria) this;
        }

        public Criteria andSesIdLessThanOrEqualTo(Integer value) {
            addCriterion("ses_id <=", value, "sesId");
            return (Criteria) this;
        }

        public Criteria andSesIdIn(List<Integer> values) {
            addCriterion("ses_id in", values, "sesId");
            return (Criteria) this;
        }

        public Criteria andSesIdNotIn(List<Integer> values) {
            addCriterion("ses_id not in", values, "sesId");
            return (Criteria) this;
        }

        public Criteria andSesIdBetween(Integer value1, Integer value2) {
            addCriterion("ses_id between", value1, value2, "sesId");
            return (Criteria) this;
        }

        public Criteria andSesIdNotBetween(Integer value1, Integer value2) {
            addCriterion("ses_id not between", value1, value2, "sesId");
            return (Criteria) this;
        }

        public Criteria andOrderTimeIsNull() {
            addCriterion("order_time is null");
            return (Criteria) this;
        }

        public Criteria andOrderTimeIsNotNull() {
            addCriterion("order_time is not null");
            return (Criteria) this;
        }

        public Criteria andOrderTimeEqualTo(Date value) {
            addCriterion("order_time =", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeNotEqualTo(Date value) {
            addCriterion("order_time <>", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeGreaterThan(Date value) {
            addCriterion("order_time >", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("order_time >=", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeLessThan(Date value) {
            addCriterion("order_time <", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeLessThanOrEqualTo(Date value) {
            addCriterion("order_time <=", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeIn(List<Date> values) {
            addCriterion("order_time in", values, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeNotIn(List<Date> values) {
            addCriterion("order_time not in", values, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeBetween(Date value1, Date value2) {
            addCriterion("order_time between", value1, value2, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeNotBetween(Date value1, Date value2) {
            addCriterion("order_time not between", value1, value2, "orderTime");
            return (Criteria) this;
        }

        public Criteria andRowIdIsNull() {
            addCriterion("row_id is null");
            return (Criteria) this;
        }

        public Criteria andRowIdIsNotNull() {
            addCriterion("row_id is not null");
            return (Criteria) this;
        }

        public Criteria andRowIdEqualTo(Integer value) {
            addCriterion("row_id =", value, "rowId");
            return (Criteria) this;
        }

        public Criteria andRowIdNotEqualTo(Integer value) {
            addCriterion("row_id <>", value, "rowId");
            return (Criteria) this;
        }

        public Criteria andRowIdGreaterThan(Integer value) {
            addCriterion("row_id >", value, "rowId");
            return (Criteria) this;
        }

        public Criteria andRowIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("row_id >=", value, "rowId");
            return (Criteria) this;
        }

        public Criteria andRowIdLessThan(Integer value) {
            addCriterion("row_id <", value, "rowId");
            return (Criteria) this;
        }

        public Criteria andRowIdLessThanOrEqualTo(Integer value) {
            addCriterion("row_id <=", value, "rowId");
            return (Criteria) this;
        }

        public Criteria andRowIdIn(List<Integer> values) {
            addCriterion("row_id in", values, "rowId");
            return (Criteria) this;
        }

        public Criteria andRowIdNotIn(List<Integer> values) {
            addCriterion("row_id not in", values, "rowId");
            return (Criteria) this;
        }

        public Criteria andRowIdBetween(Integer value1, Integer value2) {
            addCriterion("row_id between", value1, value2, "rowId");
            return (Criteria) this;
        }

        public Criteria andRowIdNotBetween(Integer value1, Integer value2) {
            addCriterion("row_id not between", value1, value2, "rowId");
            return (Criteria) this;
        }

        public Criteria andColumnIdIsNull() {
            addCriterion("column_id is null");
            return (Criteria) this;
        }

        public Criteria andColumnIdIsNotNull() {
            addCriterion("column_id is not null");
            return (Criteria) this;
        }

        public Criteria andColumnIdEqualTo(Integer value) {
            addCriterion("column_id =", value, "columnId");
            return (Criteria) this;
        }

        public Criteria andColumnIdNotEqualTo(Integer value) {
            addCriterion("column_id <>", value, "columnId");
            return (Criteria) this;
        }

        public Criteria andColumnIdGreaterThan(Integer value) {
            addCriterion("column_id >", value, "columnId");
            return (Criteria) this;
        }

        public Criteria andColumnIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("column_id >=", value, "columnId");
            return (Criteria) this;
        }

        public Criteria andColumnIdLessThan(Integer value) {
            addCriterion("column_id <", value, "columnId");
            return (Criteria) this;
        }

        public Criteria andColumnIdLessThanOrEqualTo(Integer value) {
            addCriterion("column_id <=", value, "columnId");
            return (Criteria) this;
        }

        public Criteria andColumnIdIn(List<Integer> values) {
            addCriterion("column_id in", values, "columnId");
            return (Criteria) this;
        }

        public Criteria andColumnIdNotIn(List<Integer> values) {
            addCriterion("column_id not in", values, "columnId");
            return (Criteria) this;
        }

        public Criteria andColumnIdBetween(Integer value1, Integer value2) {
            addCriterion("column_id between", value1, value2, "columnId");
            return (Criteria) this;
        }

        public Criteria andColumnIdNotBetween(Integer value1, Integer value2) {
            addCriterion("column_id not between", value1, value2, "columnId");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}